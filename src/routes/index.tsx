import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import cityPlan from "@qwik-city-plan";
import styles from "./index.css?inline";

export default component$(() => {
    useStyles$(styles);
    console.log(cityPlan.routes);
    return (
        <div>
            <nav>
                {cityPlan.routes.map((route) => {
                    return (
                        route[3].includes("posts") && (
                            <Link
                                class="route-path"
                                href={route[3]}
                                key={route[3]}
                            >
                                {route[3]}
                            </Link>
                        )
                    );
                })}
            </nav>
        </div>
    );
});
