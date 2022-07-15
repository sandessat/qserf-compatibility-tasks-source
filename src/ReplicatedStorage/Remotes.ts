import { Definitions, CreateDefinitions } from "@rbxts/net";
import { TRestrictedDoor, TUnrestrictedDoor } from "#src/../types/Doors";

const Remotes = CreateDefinitions({
	InteractDoor: Definitions.ServerToClientEvent<[action: "Open" | "Close", door: TRestrictedDoor | TUnrestrictedDoor]>(),
	SendMessage: Definitions.Namespace({
		Server: Definitions.ClientToServerEvent<[message: string]>(),
		Client: Definitions.ServerToClientEvent<[sender: Player, message: string]>(),
	}),
});

export default Remotes;
