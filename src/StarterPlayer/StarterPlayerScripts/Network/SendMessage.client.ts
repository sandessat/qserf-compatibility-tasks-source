import { Players } from "@rbxts/services";

import Remotes from "#src/ReplicatedStorage/Remotes";
import { TCommunicationsScreen } from "#src/../types/Screens";

const Player: Player = Players.LocalPlayer;
const PlayerGui: PlayerGui = Player.WaitForChild("PlayerGui") as PlayerGui;

Remotes.Client.GetNamespace("SendMessage")
	.Get("Client")
	.Connect((sender: Player, message: string) => {
		const CommunicationsScreen: TCommunicationsScreen = PlayerGui.FindFirstChild("CommunicationsScreen") as TCommunicationsScreen;
		if (!CommunicationsScreen) return;

		const ContentFrame = CommunicationsScreen.Holder.Body.Content;

		const MessageFrame = CommunicationsScreen.Holder.Body.Template.Clone();
		MessageFrame.Name = tostring(sender.UserId);
		MessageFrame.LayoutOrder = os.time() * -1;
		MessageFrame.Parent = ContentFrame;

		MessageFrame.Avatar.Image = Players.GetUserThumbnailAsync(sender.UserId, Enum.ThumbnailType.HeadShot, Enum.ThumbnailSize.Size100x100)[0];
		MessageFrame.Header.Text = sender.DisplayName + " (@" + sender.Name + "):";
		MessageFrame.Message.Text = message;

		MessageFrame.Visible = true;
	});
