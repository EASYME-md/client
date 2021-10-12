const WELCOME_MESSAGE = `# 🙌 안녕하세요. 한재원입니다!   

## ❓ EASYME.md가 뭐예요?   
- **EASYME.md**는 **<u>개발자가 READMD.md를 좀 더 쉽게 작성할 수 있도록</u>** 하기 위해 만들었습니다.   
- 블로그에서 글을 쓰는 것처럼 쉽게 글을 작성하고 스타일을 적용하면 오른쪽(👉)에 미리보기로 확인하실 수 있습니다.   
- 스타일을 적용하면 마크다운 문법 및 md 파일에서 인식할 수 있는 소스코드가 이곳에 자동으로 적용됩니다.   
- 복사하기를 통해 본문 내용을 복사하고 여러분의 README에 적용해보세요.   

## 🙋‍♀️ 좀 더 구체적으로 가르쳐주세요!   
1.  왼쪽 공간에서 블로그에 글을 쓰는 것처럼 READMD를 작성해주세요!   
2. 👆 위에 툴바창에 보이는 다양한 스타일을 적용해보세요!   
3. 다 작성하셨나요? 예쁘게 잘 나왔는지 오른쪽 미리보기 화면에서 확인해보세요.   
4. 오른쪽에 작성한 글 전체를 복사하세요!   
(저장을 원할 경우 \`Ctrl + S\` / \`Command + S\` 또는 툴바창 제일 오른쪽에 \`공유하기 아이콘\`을 클릭해주세요.)   
5. 이제 여러분의 **README.md** 에 붙여넣으세요!   
(저장 또는 공유를 할 경우 링크를 다른 사람에게 전달할 수 있어요! 😀)  

## 🛠 기능 엿보기   
<s>- \`Enter\`를 누르면 자동으로 공백 3칸 띄어쓰기가 적용돼요!</s>

1. [❓ EASYME.md가 뭐예요?  ](#-easymemd가-뭐예요)
2. [🙋‍♀️ 좀 더 구체적으로 가르쳐주세요!](#-좀-더-구체적으로-가르쳐주세요)
3. [🛠 기능 엿보기](#-기능-엿보기)
    - [Header](#header)   
    - [Text Style1](#text-style1)   
    - [Text Stlye2](#text-style2)   
    - [List](#list)      
    - [Link](#link)   
    - [Code Block](#code-block)   
    - [Table](#table)   
   
## Header
- # H1 Header   
- ## H2 Header   
- ### H3 Header   
- #### H4 Header   
- ##### H5 Header   
- ###### H6 Header   

<br>   

## Text Style1
- **진하게** (\`Ctrl(Command) + B\`)   
- *기울이기* (\`Ctrl(Command) + I\`)   
- <s>취소선</s> (\`Ctrl(Command) + D\`)   
- <u>밑줄</u> (\`Ctrl(Command) + U\`)   

<br>   
   
## Text Style2

>인용문   
   
<details><summary>접고 펴는 기능
</summary>

*Write here!*
</details>

- EASYME.md를 드래그하고 상단에 \`Aa\` 아이콘을 누르면? 👉 Easyme.md   
- EASYME.md를 드래그하고 상단에 \`A\` 아이콘을 누르면? 👉 EASYME.MD   
- EASYME.md를 드래그하고 상단에 \`a\` 아이콘을 누르면? 👉 easyme.md   
   
<br>   
   
## List   
### Table of contents
1. [title1](#wirte-title-here!)   
2. [title2](#only-lowercase)   
3. [title3](#use"-"instead-of-spacing-words)   
4. [title4](#example)   
    - [❓ EASYME.md가 뭐예요?](#-easymemd가-뭐예요)   
    - [🛠 기능 엿보기](#-기능-엿보기)
   
### Unordered list   
- unordered list1   
- unordered list2   
- unordered list3   
- unordered list4   
   
### Ordered list   
1. ordered list1   
2. ordered list2   
3. ordered list3   
4. ordered list4   
   
<br>   
   
## Link   
### General link
- [🚗 Visit "EASYME.md" Github](https://github.com/EASYME-md/client)   
- [🙋‍♂️ Visit "Jaewon Han" Github](https://github.com/onealog)

### Image link
![onealog](https://avatars.githubusercontent.com/u/41319143?v=4)   
Hello! I'm Jaewon Han 😃 
   
<br>   
   
## Code Block   
### Code inline
- \`console.log('Hello EASYME.md!');\`   
   
### Code block
\`\`\`js
function makeDeveloper(name, language) {
  if (name === 'Jaewon' && language === 'JavaScript') {
    return 'perfect!';
  }

  return false;
}

makeDeveloper('Jaewon', 'JavaScript');
\`\`\`

<br>   
   
## Table   


| title1 | title2 | title3 |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |


<br>   

`;

export default WELCOME_MESSAGE;
