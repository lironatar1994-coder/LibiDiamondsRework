const STEPS = [
  { title: "שיחה", body: "מה מחפשים, לאיזה תקציב, ולאיזה תאריך." },
  { title: "אבן ותעודה", body: "תמונות ווידאו של האבן, ומספר התעודה לבדיקה באתר המעבדה." },
  { title: "מסירה", body: "משלוח מבוטח בכל הארץ, בתיאום מראש." },
] as const;

export function ProcessSteps({ id = "process-title" }: { id?: string }) {
  return (
    <section className="process-steps" aria-labelledby={id}>
      <h2 id={id}>מה קורה אחרי שפונים</h2>
      <ol>
        {STEPS.map((step, index) => (
          <li key={step.title}>
            <span aria-hidden="true">{index + 1}</span>
            <strong>{step.title}</strong>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
