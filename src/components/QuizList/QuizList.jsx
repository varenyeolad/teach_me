import { useId } from "react-id-generator";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function QuizList() {

    const [htmlId] = useId();
    const [isCorrect, setIsCorrect] = useState([])
    const [isWrong, setIsWrong] = useState([])
    const [isCorrectIndex, setIsCorrectIndex] = useState([])
    const message = useSelector((state) => state.getData.data)
    const loading = useSelector((state) => state.getData.loading)
    console.log(loading)
  
    useEffect(() => {
      console.log(isCorrect)
      console.log(isWrong)
    })
  
    let arr = message.content.split(/\d+\./g)
    arr = arr.filter((item) => item.length > 1)
  
    let arr2 = arr.map((item) => item[(item.indexOf('Correct answer:')+16)])
    arr = arr.map((item) => item.slice(0, item.indexOf('Correct answer:')))
    arr = arr.map((item) => item.split(/(?=a\)|b\)|c\)|d\))/))
  
    console.log(arr2)
  
    function handleClick(event, index)  {
      if(arr2[index] == event.target.attributes[0].value)  {
        console.log('correct')
        setIsCorrect([...isCorrect, {
          index: index,
          answer: event.target.attributes[0].value
        }])
        setIsCorrectIndex([...isCorrectIndex, index])
      }else{
        console.log('wrong')
        setIsWrong([...isWrong, index])
      }
    }
  
    function checkIfCorrect(answer, index, text) {
        for(let i = 0; i < isCorrect.length; i++) {
  
          if(isCorrect[i]?.index == index && isCorrect[i]?.answer == answer)  {
            return (
              <div style={{backgroundColor: 'rgba(2, 168, 35, 0.3)'}}>
                {text}
              </div>
            )
        }
    }
  
    return (
      <div data-value={answer}>
        {text}
      </div>
    )
  }

  return (
    <>
        <div style={{margin: '0 auto', textAlign: 'center'}}>
              {arr.map((item, index) => {
                return (
                  <div key={htmlId} data-value={index} onClick={() => {handleClick(event, index)}} style={{padding: '20px', pointerEvents: isWrong.includes(index) ? 'none' : isCorrectIndex.includes(index) ? 'none' : 'auto', backgroundColor: isWrong.includes(index) ? 'rgba(0, 0, 0, 0.3)' : 'inherit'}}>
                  
                      {item.map((item2) => {
                        return(
                          checkIfCorrect(item2[0], index, item2)
                        ) 
                      })}
                  </div>
                )
              })}
          </div>
    </>
  )
}
