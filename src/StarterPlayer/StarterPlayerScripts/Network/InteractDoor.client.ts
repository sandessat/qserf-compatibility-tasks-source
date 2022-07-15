import { TweenService } from "@rbxts/services";
import Remotes from "#src/ReplicatedStorage/Remotes";

Remotes.Client.Get("InteractDoor").Connect((action, door) => {
	const DoorBody: Part = door.Content.Body;
	let TargetCFrame: CFrame = DoorBody.CFrame;

	if (action === "Open") {
		TargetCFrame = TargetCFrame.add(TargetCFrame.UpVector.mul(7.2));
	} else if (action === "Close") {
		TargetCFrame = TargetCFrame.sub(TargetCFrame.UpVector.mul(7.2));
	}

	TweenService.Create(DoorBody, new TweenInfo(1, Enum.EasingStyle.Exponential, Enum.EasingDirection.InOut), {
		CFrame: TargetCFrame,
	}).Play();
});
