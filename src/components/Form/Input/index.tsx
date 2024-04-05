import { useState } from "react";
import { InputProps } from "./_types";
import { Container, LabelInput, TextInput } from "./styles";
import { maskDate, maskTime } from "@utils/mask";

interface MaskedInputProps extends InputProps {
	maskType?: 'date' | 'time';
}

export function Input({ label, placeholder, paddingLabel, margin, paddingInput, width, maskType, multiline, height }: MaskedInputProps) {
	const [value, setValue] = useState('');

	const handleChange = (text: string) => {
		let maskedValue = text;
		if (maskType === 'date') {
			maskedValue = maskDate(text);
		} else if (maskType === 'time') {
			maskedValue = maskTime(text);
		}
		setValue(maskedValue);
	};

	return (
		<Container margin={margin} width={width}>
			<LabelInput padding={paddingLabel}>
				{label}
			</LabelInput>
			<TextInput
				height={height}
				multiline={multiline}
				value={value}
				onChangeText={handleChange}
				placeholder={placeholder}
				padding={paddingInput}
				keyboardType="numeric"
			/>
		</Container>
	)
}