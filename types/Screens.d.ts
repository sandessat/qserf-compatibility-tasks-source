export type TCommunicationsScreen = ScreenGui & {
	Holder: Frame & {
		Header: Frame & {
			UICorner: UICorner;
			Title: TextLabel;
			UIPadding: UIPadding;
		};
		Footer: Frame & {
			UICorner: UICorner;
			UIPadding: UIPadding;
			Input: Frame & {
				UICorner: UICorner;
				Box: TextBox;
			};
		};
		UIListLayout: UIListLayout;
		UIAspectRatioConstraint: UIAspectRatioConstraint;
		Body: Frame & {
			UICorner: UICorner;
			Template: Frame & {
				Message: TextLabel;
				Header: TextLabel;
				Avatar: ImageLabel & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
					UICorner: UICorner;
				};
			};
			Content: ScrollingFrame & {
				UIListLayout: UIListLayout;
			};
			UIPadding: UIPadding;
		};
	};
	UIPadding: UIPadding;
};
