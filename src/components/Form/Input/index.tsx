import { WindowScreen } from "@ui/index";
import { MaskedInputProps } from "./_types";
import { Container, ErrorMessage, EyeIconContainer, LabelInput, TextInput } from "./styles";
import { maskDate, maskTime } from "@utils/mask";
import { Controller } from 'react-hook-form';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "@ui-kitten/components";

export function Input({
	label,
	placeholder,
	width = WindowScreen.width * 0.6,
	height = 45,
	padding,
	maskType,
	multiline,
	control,
	name,
	keyboardType,
	errors,
	secureTextEntry = false
}: MaskedInputProps) {
	const [secure, setSecure] = useState(secureTextEntry);

	const toggleSecureEntry = () => {
		setSecure(!secure);
	};

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
		<Container width={width}>
			{label && <LabelInput>{label}</LabelInput>}
			<Controller
				control={control}
				render={({ field: { onChange, value } }) => (
					<>
						<TextInput
							height={height}
							multiline={multiline}
							value={value}
							onChangeText={value => onChange(handleChange(value))}
							placeholder={placeholder}
							keyboardType={keyboardType}
							secureTextEntry={secure}
							padding={padding}
						/>
						{secureTextEntry && (
							<EyeIconContainer>
								<TouchableOpacity onPress={toggleSecureEntry}>
									<Icon
										name={secure ? 'eye-off-outline' : 'eye-outline'}
										fill="#8F9BB3"  
										style={{ width: 24, height: 24 }} 
									/>
								</TouchableOpacity>
							</EyeIconContainer>
						)}
					</>
				)}
				name={name}
				defaultValue=""
			/>
			{errors && errors[name] && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
		</Container>
	);
}
