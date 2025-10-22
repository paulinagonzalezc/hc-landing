export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0/mo",
      features: ["1 Project", "1GB storage", "Community support"],
      button: "Start Free",
    },
    {
      name: "Pro",
      price: "$12/mo",
      features: ["Unlimited Projects", "50GB storage", "AI tutoring"],
      button: "Upgrade to Pro",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Dedicated support", "Custom infra", "Team management"],
      button: "Contact Sales",
    },
  ];

  return (
    <section className="pricing-section">
      <h1>Simple, transparent pricing.</h1>
      <p>Choose the plan that fits your needs. Start free, upgrade anytime.</p>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div key={i} className={`plan-card ${plan.highlight ? "highlight" : ""}`}>
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button>{plan.button}</button>
          </div>
        ))}
      </div>
    </section>
  )
}
