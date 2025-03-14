const Dot = ({ num, currentPage }) => {
  return (
    <div
      style={{
        width: 10,
        height: 10,
        border: '1px solid black',
        borderRadius: 999,
        backgroundColor: currentPage === num ? 'black' : 'transparent',
        transitionDuration: '1000ms',
        transition: 'background-color 0.5s',
      }}
    ></div>
  );
};

export const Dots = ({ currentPage }) => {
  return (
    <div style={{ position: 'fixed', top: '50%', right: 50 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 20,
          height: 100,
        }}
      >
        <Dot num={1} currentPage={currentPage}></Dot>
        <Dot num={2} currentPage={currentPage}></Dot>
        <Dot num={3} currentPage={currentPage}></Dot>
        <Dot num={4} currentPage={currentPage}></Dot>
        <Dot num={5} currentPage={currentPage}></Dot>
      </div>
    </div>
  );
};
