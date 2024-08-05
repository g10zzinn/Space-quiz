import Logo from "@/components/template/Logo";
import Pagina from "@/components/template/Pagina";
import Pergunta from "@/components/template/questionario/Pergunta";
import Resultado from "@/components/template/questionario/Resultado";
import useQuestionario from "@/data/constants/hooks/useQuestionario";

import { Text, View } from "react-native";

export default function Index() {
  
  const {pergunta,concluido, pontuacao, totalDePerguntas,reiniciar, responder} = useQuestionario()

  return (
    
   
    <Pagina>
      <View style={{gap: 20}} >
       <Logo/>

       {
        concluido ? (
          <Resultado
          pontuacao={pontuacao}
          totalDePerguntas={totalDePerguntas}
          reiniciar={reiniciar}/>
        ) : (
                 <Pergunta pergunta={pergunta} opcaoSelecionada={responder}/> 
        )
       }

       </View>
    </Pagina>
   
  
  );
}
