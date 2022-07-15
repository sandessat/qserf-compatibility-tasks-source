import { Players, ServerStorage } from "@rbxts/services";

Players.PlayerAdded.Connect((player: Player) => {
	player.CharacterAdded.Connect((character: Model) => {
		const PlayerBackpack: Backpack = player.WaitForChild("Backpack") as Backpack;

		if (player.GetRankInGroup(2847031) >= 5) ServerStorage.Cards["Employees Card"].Clone().Parent = PlayerBackpack;
		if (player.GetRankInGroup(5684648) >= 3) ServerStorage.Cards["Security Card"].Clone().Parent = PlayerBackpack;
		if (player.GetRankInGroup(2847031) >= 250) ServerStorage.Cards["Administrators Card"].Clone().Parent = PlayerBackpack;
	});
});
