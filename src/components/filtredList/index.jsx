const FiltredList = () => {
  return (
    <>
      <h1 className="text-[#2E3E5C] text-lg font-bold">Filtrar</h1>
      <div className="flex justify-around mt-3">
        <button className="w-20 h-12 rounded-[32px] bg-[#1FCC79]">
        <p className="text-white font-bold">Todas</p>
        </button>
        <button className="w-20 h-12 rounded-[32px] bg-[#1FCC79]">
        <p className="text-white font-bold">A fazer</p>
        </button>
        <button className="w-20 h-12 rounded-[32px] bg-[#1FCC79]">
        <p className="text-white font-bold">Feitas</p>
        </button>  
      </div>       
    </>
  );
};

export default FiltredList;
