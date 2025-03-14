import { Profiler, ProfilerProps as ReactProfilerProps } from 'react';

export default function ProfilerTableLogWrapper({ children, ...others }) {
  return (
    <Profiler
      onRender={(
        id, // 프로파일러의 고유 식별자
        phase, // 렌더링 단계 (mount 또는 update)
        actualDuration, // 실제 렌더링에 걸린 시간(ms)
        baseDuration, // 메모이제이션 없이 렌더링했을 때 예상 시간(ms)
        startTime, // 렌더링 시작 시점(타임스탬프)
        commitTime // 변경 사항이 DOM에 커밋된 시점
      ) => {
        console.table({
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime,
        });
      }}
      {...others}
    >
      {children}
    </Profiler>
  );
}
