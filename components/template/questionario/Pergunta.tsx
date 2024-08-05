
 import PerguntaModel from '@/data/constants/model/Pergunta'
import { View, Text } from 'react-native'
import Enunciado from './Enunciado'
import Opcao from './Opcao'
 

export interface PerguntaProps {
    pergunta: PerguntaModel
    opcaoSelecionada: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps){
return (
    <View style={{gap:25}}>
        <Enunciado enunciado={props.pergunta.enunciado} />
        <View style={{gap: 12}}>
          {props.pergunta.opcoes.map((opcao, indice) =>(
            <Opcao key={indice} indice={indice} texto={opcao} onPress={() => props.opcaoSelecionada(indice)}/>
          )

          )}
        </View>

       </View>
)
}