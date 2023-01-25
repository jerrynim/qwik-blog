import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import cityPlan from "@qwik-city-plan";
import styles from "./index.css?inline";

export default component$(() => {
    useStyles$(styles);
    return (
        <div>
            <nav>
                {cityPlan.routes.map((route) => {
                    return (
                        <Link class="route-path" href={route[3]} key={route[3]}>
                            {route[3]}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
});
