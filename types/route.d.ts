type RootStackParamList = {
    home : undefined;
    details: {id: number; title: string; start: number} | undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList{ }
    }
}