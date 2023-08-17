export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
    queue.push('Guardrail was processed');
  } catch (err) {
    queue.push(err.toString());
    queue.push('Guardrail was processed');
  }

  return queue;
}
