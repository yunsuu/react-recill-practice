RecoilRoot 에러가 자주났다.
이 에러는 선언하려고 하는 함수 컴포넌트 상단에 RecoilRoot가
없어서 발생하는 에러이다.

다음과 같은 경우...
```js

function App() {
  const [a, setA] = useRecoilState(Data) //여기서 에러난다.
    // 상위컴포넌트에 RecoilRoot가 없는데 
    // Recoil hook을 사용하려고 하기 때문에 인식하지 못한다.
  return (
    <>
      <RecoilRoot>
        ...
      </RecoilRoot>
    </>
  );
}
```

에러가 안나려면 APP을 어디 컴포넌트에 속하게 만들어 준 후
Recoil Hook을 사용해야 한다.