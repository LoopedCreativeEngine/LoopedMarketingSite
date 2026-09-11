/**
 * Availability is retained only as an internal data annotation on capability and
 * channel records. Per the standing marketing direction, rollout-state labels
 * (Live, In pilot, Rolling out) are NOT surfaced anywhere in the public site, so
 * nothing is rendered from it. The type is kept so the annotations stay valid
 * and typed; it is deliberately not a component.
 */
export type Availability = "live" | "pilot" | "soon";
