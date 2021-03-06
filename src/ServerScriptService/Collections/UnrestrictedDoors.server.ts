import { CollectionService } from "@rbxts/services";

import Remotes from "#src/ReplicatedStorage/Remotes";
import { TUnrestrictedDoor } from "#src/../types/Doors";

function InteractDoor(door: TUnrestrictedDoor): void {
	door.Settings.Debounce.Value = false;

	if (door.Settings.IsDoorOpen.Value === false) {
		Remotes.Server.Get("InteractDoor").SendToAllPlayers("Open", door);
		door.Settings.IsDoorOpen.Value = true;
	} else {
		Remotes.Server.Get("InteractDoor").SendToAllPlayers("Close", door);
		door.Settings.IsDoorOpen.Value = false;
	}

	task.wait(1);
	door.Settings.Debounce.Value = true;
}

CollectionService.GetTagged("Unrestricted Doors").forEach((tagged: Instance) => {
	if (!tagged.IsA("Model")) return;
	const Door: TUnrestrictedDoor = tagged as TUnrestrictedDoor;

	Door.Content.Buttons.GetDescendants().forEach((descendant: Instance) => {
		if (!descendant.IsA("ProximityPrompt")) return;
		descendant.Triggered.Connect(() => {
			if (Door.Settings.Debounce.Value === true) InteractDoor(Door);
		});
	});
});
