import TeePreviewWithObserver from "./TeePreview";

const ALL_TEES = [
    { 
      key: "breakpoint-goosebumps-tee", 
      name: "Breakpoint Goosebumps Tee",
      price: 24.99, 
    },
    { 
      key: "chew-more-glass-tee", 
      name: "Chew More Glass Tee",
      price: 24.99,
    },
    { 
      key: "breakpoint-strange-amsterdam-tee", 
      name: "Breakpoint Strange Amsterdam Tee",
      price: 24.99,  
    },
    { 
      key: "hold-me-closer-fire-dancer-tee", 
      name: "Hold Me Closer Firedancer Tee",
      price: 24.99, 
    },
    { 
      key: "sol-brothers-tee", 
      name: "SOL Brothers Tee",
      price: 24.99,  
    },
    { 
      key: "raj-tee", 
      name: "Raj Tee",
      price: 24.99,  
    },
    { 
      key: "sol-shop-tee", 
      name: "SOL Shop Tee",
      price: 24.99,  
    },
    { 
      key: "toly-tee",
      name: "Toly Tee",
      price: 24.99,  
    },
];
  
export default function ProductGrid() {
  return (
    <div className='text-center sm:container sm:mx-auto'>
      <h1 className='font-bold text-3xl py-3'>Breakpoint 2023 Collection</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 px-4'>
          { ALL_TEES.map(tee => 
            <TeePreviewWithObserver key={tee.key} tee={tee} />) 
          }
      </div>
    </div>
  )
}