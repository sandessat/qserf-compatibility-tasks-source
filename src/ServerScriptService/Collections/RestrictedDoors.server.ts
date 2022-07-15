import { CollectionService } from "@rbxts/services";

import Remotes from "#src/ReplicatedStorage/Remotes";

import { TRestrictedDoor } from "#src/../types/Doors";
import { TRestriction } from "#src/../types/General";

function InteractDoor(door: TRestrictedDoor): void {
	door.Settings.Debounce.Value = false;

	if (door.Settings.IsDoorOpen.Value === false) {
		Remotes.Server.Get("InteractDoor").SendToAllPlayers("Open", door);
		task.wait(1);
		door.Settings.IsDoorOpen.Value = true;
	} else {
		Remotes.Server.Get("InteractDoor").SendToAllPlayers("Close", door);
		task.wait(1);
		door.Settings.IsDoorOpen.Value = false;
	}

	door.Settings.Debounce.Value = true;
}

CollectionService.GetTagged("Restricted Doors").forEach((tagged: Instance) => {
	if (!tagged.IsA("Model")) return;
	const Door: TRestrictedDoor = tagged as TRestrictedDoor;
	const Restriction: TRestriction = Door.Settings.Restriction.Value as TRestriction;

	Door.Content.Buttons.GetDescendants().forEach((descendant: Instance) => {
		if (!descendant.IsA("ProximityPrompt")) return;
		descendant.Triggered.Connect((player: Player) => {
			const Character: Model = player.Character || player.CharacterAdded.Wait()[0];
			if (!Character.FindFirstChild(Restriction + " Card")) return;

			switch (Restriction) {
				case "Employees":
					if (!(player.GetRankInGroup(2847031) >= 5)) return;
					if (Door.Settings.Debounce.Value === true) InteractDoor(Door);
					break;
				case "Security":
					if (!(player.GetRankInGroup(5684648) >= 3)) return;
					if (Door.Settings.Debounce.Value === true) InteractDoor(Door);
					break;
				case "Administrators":
					if (!(player.GetRankInGroup(2847031) >= 250)) return;
					if (Door.Settings.Debounce.Value === true) InteractDoor(Door);
					break;
			}
		});
	});
});
