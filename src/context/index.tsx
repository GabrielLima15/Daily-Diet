
import React from 'react';

import { CoreState } from './CoreContext'
import { AuthState } from './AuthContext'
import { MealState } from './MealContext';

interface AppContextProps {
	children: React.ReactNode;
}

export default function AppContext({ children }: AppContextProps) {

	return (
		<CoreState>
			<AuthState>
				<MealState>
					{children}
				</MealState>
			</AuthState>
		</CoreState>
	);
}