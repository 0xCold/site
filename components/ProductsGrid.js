import TeePreview from "./TeePreview";

const ALL_TEES = [
    "breakpoint-goosebumps-tee",
    "breakpoint-strange-amsterdam-tee",
    "chew-more-glass-tee",
    "hold-me-closer-fire-dancer-tee",
    "raj-tee",
    "sol-brothers-tee",
    "sol-shop-tee",
    "toly-tee",
];
  
export default function ProductsGrid() {
    return (
        <div className='text-center md:container md:mx-auto bg-blue-500'>
            <h1 className='font-bold text-3xl py-3'>Breakpoint 2023 Collection</h1>
            <div className='grid grid-cols-2 md:grid-cols-4'>
                { ALL_TEES.map(tee => <TeePreview key={tee} name={tee} />) }
            </div>
        </div>
    )
}