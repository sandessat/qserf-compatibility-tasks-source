export type TRestrictedDoor = Model & {
	Content: Folder & {
		Buttons: Folder & {
			Front: Part & {
				Prompt: ProximityPrompt;
			};
			Bodies: Folder;
			Back: Part & {
				Prompt: ProximityPrompt;
			};
		};
		Body: Part;
	};
	Settings: Configuration & {
		Restriction: StringValue;
		Debounce: BoolValue;
		IsDoorOpen: BoolValue;
	};
};

export type TUnrestrictedDoor = Model & {
	Content: Folder & {
		Buttons: Folder & {
			Front: Part & {
				Prompt: ProximityPrompt;
			};
			Bodies: Folder;
			Back: Part & {
				Prompt: ProximityPrompt;
			};
		};
		Body: Part;
	};
	Settings: Configuration & {
		Debounce: BoolValue;
		IsDoorOpen: BoolValue;
	};
};
