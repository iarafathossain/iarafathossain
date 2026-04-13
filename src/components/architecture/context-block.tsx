export default function ContextBlock({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="mt-5 pl-4 border-l-2 border-primary/70">
      <p className="mb-1 text-base font-semibold tracking-wide text-foreground">
        {title}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}
