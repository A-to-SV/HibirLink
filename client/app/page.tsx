import FlashSales from "@/components/Home/FlashSales/flash-sales-section";
import Supplier from "@/components/Home/Supplier/supplier-section";

export default function Home() {
  return (
    <div className="text-center">
      <Supplier/>
      <FlashSales/>
    </div>
  );
}


