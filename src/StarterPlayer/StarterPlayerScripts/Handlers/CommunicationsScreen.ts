import Remotes from "#src/ReplicatedStorage/Remotes";
import { TCommunicationsScreen } from "#src/../types/Screens";

export default (child: ScreenGui) => {
	const CommunicationsScreen: TCommunicationsScreen = child as TCommunicationsScreen;
	const InputBox = CommunicationsScreen.Holder.Footer.Input.Box;

	InputBox.FocusLost.Connect((enterPressed: boolean) => {
		if (!enterPressed) return;
		if (InputBox.Text === "") return;
		Remotes.Client.GetNamespace("SendMessage").Get("Server").SendToServer(InputBox.Text);
		InputBox.Text = "";
	});
};
