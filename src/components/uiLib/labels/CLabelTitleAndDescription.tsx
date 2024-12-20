export function CLabelTitleAndDescription({ item }: { item: string }) {
  return (
    <span className="flex-grow sm:flex-grow-0 p-y px-3 bg-slate-200 text-black text-center rounded-lg hover:font-bold duration-200">
      {item}
    </span>
  );
}
