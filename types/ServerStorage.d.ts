interface ServerStorage extends Instance {
	TagList: Folder & {
		["Unrestricted Doors"]: Configuration;
		["Restricted Doors"]: Configuration;
	};
	Cards: Folder & {
		["Administrators Card"]: Tool & {
			Handle: Part;
		};
		["Employees Card"]: Tool & {
			Handle: Part;
		};
		["Security Card"]: Tool & {
			Handle: Part;
		};
	};
}
