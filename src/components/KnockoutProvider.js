import KnockoutContext from "../context/KnockoutContext";

const KnockoutProvider = ({ children }) => {
  const [ViewModel, setViewModel] = React.useState({});

  /*
    Toda vez que um elemento novo é adicionado a ViewModel
    os bindings são refeitos
  */
  React.useEffect(() => {
    ko.applyBindings(ViewModel, document.getElementById("ko-root"));
  }, []);

  return (
    <KnockoutContext.Provider value={[ViewModel, setViewModel]}>
      <div id="ko-root">{children}</div>
    </KnockoutContext.Provider>
  );
};

export default KnockoutProvider;
