export const Button = ({ title }) => (
	<button
		style={{
			width: "100%",
			backgroundColor: "black",
			color: "white",
			padding: ".7rem 1rem",
			border: "none",
			borderRadius: ".3rem",
		}}
	>
		{title}
	</button>
);

export const BtnGrey = ({ title, onclick }) => (
	<button
		onClick={onclick}
		style={{
			backgroundColor: "#c4c4c4",
			minWidth: "100px",
			color: "black",
			padding: ".5rem 1rem",
			border: "none",
			borderRadius: ".4rem",
		}}
	>
		{title}
	</button>
);

export const BtnBlack = ({ title, onclick }) => (
	<button
		onClick={onclick}
		style={{
			backgroundColor: "black",
			minWidth: "100px",
			color: "white",
			padding: ".5rem 1rem",
			border: "none",
			borderRadius: ".4rem",
		}}
	>
		{title}
	</button>
);

export const Btn = ({ icon, title, onclick }) => (
	<button
		onClick={onclick}
		style={{
			backgroundColor: "black",
			color: "white",
			padding: ".5rem 1.5rem",
			border: "none",
			borderRadius: ".3rem",
			display: "flex",
			alignItems: "center",
		}}
	>
		{icon ? icon() : null} <p style={{ marginLeft: ".5rem" }}>{title}</p>
	</button>
);
