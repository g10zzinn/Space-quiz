import { View, Text,StyleSheet, Pressable } from "react-native";

export interface ResultadoProps {
    pontuacao: number
    totalDePerguntas: number
    reiniciar: () => void
}

export default function Resultado ( props: ResultadoProps ){
    const { pontuacao, totalDePerguntas, reiniciar} = props
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Você acertou</Text>
            <Text style={styles.destaque}>
                {Math.round ((pontuacao / totalDePerguntas ) * 100)}%
            </Text>
            <Pressable style={styles.botao} onPress={reiniciar}>
                <Text style={styles.textobotao}>Reiniciar</Text>
            </Pressable>
        </View>
    
    )
}
const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 15,
        borderRadius:12
    },
    texto: { color: '#bbb',
        fontSize: 20
    },
    destaque: { color: 'white',
        fontSize: 40,
        fontWeight: '900',

    },
    botao: { color: 'white',
        marginTop: 20,
        backgroundColor: '#2E8B57',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10


    },
    textobotao: {color: 'white'},



})