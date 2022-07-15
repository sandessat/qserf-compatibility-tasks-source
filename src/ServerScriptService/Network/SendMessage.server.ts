import { TextService } from "@rbxts/services";
import Remotes from "#src/ReplicatedStorage/Remotes";

function GetTextFilterResult(message: string, playerId: number): TextFilterResult | undefined {
	const Results = opcall(() => TextService.FilterStringAsync(message, playerId));
	if (Results.success) {
		return Results.value;
	} else {
		print(Results.error);
		return undefined;
	}
}

function GetFilteredMessage(textFilterResult: TextFilterResult): string | undefined {
	const Results = opcall(() => textFilterResult.GetNonChatStringForBroadcastAsync());
	if (Results.success) {
		return Results.value;
	} else {
		print(Results.error);
		return undefined;
	}
}

Remotes.Server.GetNamespace("SendMessage")
	.Get("Server")
	.Connect((player: Player, message: string) => {
		const MessageTextFilterResult: TextFilterResult | undefined = GetTextFilterResult(message, player.UserId);
		if (!MessageTextFilterResult) return;
		const FilteredMessage: string | undefined = GetFilteredMessage(MessageTextFilterResult);
		if (!FilteredMessage) return;

		Remotes.Server.GetNamespace("SendMessage").Get("Client").SendToAllPlayers(player, FilteredMessage);
	});
