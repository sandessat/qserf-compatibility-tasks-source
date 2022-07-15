import { Players } from "@rbxts/services";
import HandleCommunicationsScreen from "../Handlers/CommunicationsScreen";

const Player: Player = Players.LocalPlayer;
const PlayerGui: PlayerGui = Player.WaitForChild("PlayerGui") as PlayerGui;

PlayerGui.ChildAdded.Connect((child: Instance) => {
	if (!child.IsA("ScreenGui")) return;

	switch (child.Name) {
		case "CommunicationsScreen":
			HandleCommunicationsScreen(child);
			break;
	}
});
