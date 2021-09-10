import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer() {
  const { number, diff } = useSelector(
    (state) => ({
      //useSelector를 통한 상태 조회
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual //객체 안의 가장 겉에 있는 값들을 모두 비교 (ex: object.a, object.b  object.a[0]은 아님!!)
  );
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
      ></Counter>
    </div>
  );
}

export default CounterContainer;
