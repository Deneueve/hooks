interface Props {
    value: number;
}
export type actions = { type: 'aumentar' };
export function useReduce() {
    const inicializador: Props = {
        value: 0,
    };

    const ValueReduce = (state: Props, actions: actions) => {
        switch (actions.type) {
            case 'aumentar': {
                return {
                    value: state.value + 1,
                };
            }
            default: {
                return state;
            }
        }
    };

    return { inicializador, ValueReduce };
}
