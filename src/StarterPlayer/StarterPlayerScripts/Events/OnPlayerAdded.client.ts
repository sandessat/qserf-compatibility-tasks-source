import { CollectionService } from "@rbxts/services";
import { TRestrictedDoor, TUnrestrictedDoor } from "#src/../types/Doors";

function ManageCollectionResults(tagged: Instance): void {
	if (!tagged.IsA("Model")) return;
	const Door: TRestrictedDoor | TUnrestrictedDoor = tagged as TRestrictedDoor | TUnrestrictedDoor;

	if (Door.Settings.IsDoorOpen.Value === true) {
		Door.Content.Body.CFrame = Door.Content.Body.CFrame.add(Door.Content.Body.CFrame.UpVector.mul(7.2));
	}
}

CollectionService.GetTagged("Restricted Doors").forEach((tagged: Instance) => ManageCollectionResults(tagged));
CollectionService.GetTagged("Unrestricted Doors").forEach((tagged: Instance) => ManageCollectionResults(tagged));
