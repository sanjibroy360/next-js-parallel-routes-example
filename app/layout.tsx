import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parallel Routing",
  description: "Example of Parallel Routing [Next.js]",
};

export default function RootLayout(props: {
  perCapitaIncomeChart: React.ReactNode;
  gdpGrowthTable: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-yellow-50 py-10`}>
        {props.children}

        <div className="w-full flex md:flex-row flex-col md:gap-y-0 gap-y-4 justify-between items-center relative mt-32">
          {props.perCapitaIncomeChart}
          {props.gdpGrowthTable}
        </div>
      </body>
    </html>
  );
}
