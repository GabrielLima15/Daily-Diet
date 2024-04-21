import { MaskedInputProps } from "./_types";
import { Container, ErrorMessage, LabelInput, TextInput } from "./styles";
import { maskDate, maskTime } from "@utils/mask";
import { Controller } from 'react-hook-form';



export function Input({
	label,
	placeholder,
	paddingLabel,
	margin,
	paddingInput,
	width,
	maskType,
	multiline,
	height,
	control,
	name,
	keyboardType,
	errors
}: MaskedInputProps) {
	const handleChange = (text: string) => {
		let maskedValue = text;
		if (maskType === 'date') {
			maskedValue = maskDate(text);
		} else if (maskType === 'time') {
			maskedValue = maskTime(text);
		}
		return maskedValue;
	};

	return (
		<Container margin={margin} width={width}>
			<LabelInput padding={paddingLabel}>
				{label}
			</LabelInput>
			<Controller
				control={control}
				render={({ field: { onChange, value } }) => (
					<TextInput
						height={height}
						multiline={multiline}
						value={value}
						onChangeText={value => onChange(handleChange(value))}
						placeholder={placeholder}
						padding={paddingInput}
						keyboardType={keyboardType}
					/>
				)}
				name={name}
				defaultValue=""
			/>
			{errors && errors[name] && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
		</Container>
	)
}