import CodeLine from "./code-line";

export function NextActionCode() {
  return (
    <>
      <CodeLine>
        <span className="text-muted-foreground/85 italic">
          {"// Next.js Data Flow: Service -> Action -> Client"}
        </span>
      </CodeLine>

      <CodeLine />

      <CodeLine>
        <span className="text-primary font-medium">export const </span>
        <span className="text-foreground font-medium">createProductAction</span>
        <span className="text-muted-foreground"> = </span>
        <span className="text-foreground font-medium">actionWrapper</span>
        <span className="text-muted-foreground">(</span>
        <span className="text-primary font-medium">async </span>
        <span className="text-muted-foreground">(</span>
        <span className="text-foreground/80">payload</span>
        <span className="text-muted-foreground">: </span>
        <span className="text-foreground/85">IProduct</span>
        <span className="text-muted-foreground">{") => {"}</span>
      </CodeLine>

      <CodeLine>
        <span className="text-primary font-medium">{"  const "}</span>
        <span className="text-foreground/90">product</span>
        <span className="text-muted-foreground"> = </span>
        <span className="text-primary font-medium">await </span>
        <span className="text-foreground/90">productServices.</span>
        <span className="text-foreground font-medium">addProduct</span>
        <span className="text-muted-foreground">(</span>
        <span className="text-foreground/80">payload</span>
        <span className="text-muted-foreground">);</span>
      </CodeLine>

      <CodeLine />

      <CodeLine>
        <span className="text-primary font-medium">{"  return "}</span>
        <span className="text-muted-foreground">{"{"}</span>
      </CodeLine>

      <CodeLine>
        <span className="text-foreground/90">{"    success"}</span>
        <span className="text-muted-foreground">{": "}</span>
        <span className="text-primary font-medium">true</span>
        <span className="text-muted-foreground">,</span>
      </CodeLine>

      <CodeLine>
        <span className="text-foreground/90">{"    message"}</span>
        <span className="text-muted-foreground">{": "}</span>
        <span className="text-primary/85">
          {'"Product created successfully"'}
        </span>
        <span className="text-muted-foreground">,</span>
      </CodeLine>

      <CodeLine>
        <span className="text-foreground/90">{"    statusCode"}</span>
        <span className="text-muted-foreground">{": "}</span>
        <span className="text-primary/90">201</span>
        <span className="text-muted-foreground">,</span>
      </CodeLine>

      <CodeLine>
        <span className="text-foreground/90">{"    data"}</span>
        <span className="text-muted-foreground">{": "}</span>
        <span className="text-foreground/90">product</span>
      </CodeLine>

      <CodeLine>
        <span className="text-muted-foreground">{"  };"}</span>
      </CodeLine>

      <CodeLine>
        <span className="text-muted-foreground">{"});"}</span>
      </CodeLine>
    </>
  );
}

export function ExpressRouteCode() {
  return (
    <>
      <CodeLine>
        <span className="text-muted-foreground/85 italic">
          {
            "// Express.js Route Flow: Route -> Validation -> Auth -> Controller"
          }
        </span>
      </CodeLine>

      <CodeLine />

      <CodeLine>
        <span className="text-foreground/90">router.</span>
        <span className="text-foreground font-medium">post</span>
        <span className="text-muted-foreground">(</span>
      </CodeLine>

      <CodeLine>
        <span className="text-primary/85">{'  "/"'}</span>
        <span className="text-muted-foreground">,</span>
      </CodeLine>

      <CodeLine>
        <span className="text-muted-foreground">{"  "}</span>
        <span className="text-foreground font-medium">validateRequest</span>
        <span className="text-muted-foreground">(</span>
        <span className="text-foreground/90">addProductZodSchema</span>
        <span className="text-muted-foreground">),</span>
      </CodeLine>

      <CodeLine>
        <span className="text-muted-foreground">{"  "}</span>
        <span className="text-foreground font-medium">checkAuth</span>
        <span className="text-muted-foreground">(</span>
        <span className="text-foreground/85">Role</span>
        <span className="text-muted-foreground">.</span>
        <span className="text-foreground/90">ADMIN</span>
        <span className="text-muted-foreground">, </span>
        <span className="text-foreground/85">Role</span>
        <span className="text-muted-foreground">.</span>
        <span className="text-foreground/90">SUPER_ADMIN</span>
        <span className="text-muted-foreground">),</span>
      </CodeLine>

      <CodeLine>
        <span className="text-foreground/90">{"  productControllers."}</span>
        <span className="text-foreground font-medium">addProduct</span>
        <span className="text-muted-foreground">,</span>
      </CodeLine>

      <CodeLine>
        <span className="text-muted-foreground">{");"}</span>
      </CodeLine>
    </>
  );
}
