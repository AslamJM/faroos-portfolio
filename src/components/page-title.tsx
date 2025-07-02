export default function PageTitle({ title }: { title: string }) {
  return (
    <div>
      <h3 className="font-semibold text-xl">{title}</h3>
    </div>
  );
}
