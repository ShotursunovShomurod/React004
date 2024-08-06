import React, { useState } from 'react'; 
import rasm from '../assets/image.png';

const Main = () => {
  const [data, setData] = useState([]); 
  const [nomi, setNomi] = useState(""); 
  const [izoh, setIzoh] = useState(""); 
  const [narxi, setNarxi] = useState("");

  const handleCreate = (event) => {
    event.preventDefault();
    let object = {
      id: new Date().getTime(),
      nomi,
      izoh,
      narxi
    };
    setData((prev) => [...prev, object]);
    setNomi("");
    setIzoh("");
    setNarxi("");
  };

  return (
    <>
      <form className='form' onSubmit={handleCreate} action="">
        <div className='bg-inherit rounded-lg text-center flex flex-col w-full md:w-96 gap-2 p-4'>
          <input className='form__input p-3 w-full outline-none border border-gray-300 rounded-md' required value={nomi} onChange={(event) => setNomi(event.target.value)} type="text" placeholder="Kitob nomi?" />
          <input className='form__input p-3 w-full outline-none border border-gray-300 rounded-md' required value={izoh} onChange={(event) => setIzoh(event.target.value)} type="text" placeholder='Izoh Bering' />
          <input className='form__input p-3 w-full outline-none border border-gray-300 rounded-md' required value={narxi} onChange={(event) => setNarxi(event.target.value)} type="number" placeholder='Narxini kiriting' />
          <button className='bg-indigo-400 rounded-lg text-white w-full h-full p-3 outline-none mt-2' type="submit">Create</button>
        </div>
      </form>
      
      <div className='Hero mt-10 pr-5 pl-5 mb-40'>
        <div className='hero__wrapper flex flex-wrap gap-4 justify-center'>
          {data.map((item) => (
            <div className='hero__card p-6 shadow-md bg-slate-100 rounded-xl w-full sm:w-72' key={item.id}>
              <div className='hero__imgBox w-full overflow-hidden h-48 flex justify-center mb-3 bg-gray-200 rounded-md'>
                <img className='hero__img transition flex justify-center items-center w-3/4 h-full' src={rasm} alt="" />
              </div>
              <div className='flex flex-row gap-1'>
                <p className='text-stone-700 font-bold'>Nomi :</p>
                <p className='font-medium font-mono'>{item.nomi}</p>
              </div>
              <div className='flex flex-row gap-1'>
                <p className='text-yellow-500 font-bold'>ID :</p>
                <span className='font-medium font-mono'>{item.id}</span>
              </div>
              <div className='flex flex-row gap-1'>
                <p className='text-green-600 font-bold'>Narxi : $</p>
                <p className='font-medium font-mono'>{item.narxi}</p>
              </div>
              <div className='flex flex-row gap-1'>
                <p className='text-orange-400 font-bold'>Izohingiz :</p>
                <p className='font-medium font-mono'>{item.izoh}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
