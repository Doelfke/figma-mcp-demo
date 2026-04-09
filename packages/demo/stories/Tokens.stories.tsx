import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "@figma-mcp-demo/ui";

// ─── Primitive building blocks ────────────────────────────────────────────────

const sectionStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: "0.75rem",
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const label: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: "0.75rem",
  color: "var(--muted-foreground)",
};

const name: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: "var(--foreground)",
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        margin: "0 0 0.25rem",
        fontSize: "0.6875rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--muted-foreground)",
      }}
    >
      {children}
    </h2>
  );
}

// ─── Color chip ───────────────────────────────────────────────────────────────

interface ColorChipProps {
  token: string;
  /** text token rendered on top of the swatch (e.g. foreground pair) */
  foreground?: string;
  /** override the displayed label */
  displayLabel?: string;
}

function ColorChip({ token, foreground, displayLabel }: ColorChipProps) {
  return (
    <div style={rowStyle}>
      <div
        style={{
          height: 64,
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--border)",
          backgroundColor: `var(${token})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {foreground && (
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.6875rem",
              color: `var(${foreground})`,
              opacity: 0.7,
            }}
          >
            Aa
          </span>
        )}
      </div>
      <span style={name}>{displayLabel ?? token}</span>
      <span style={label}>{`var(${token})`}</span>
    </div>
  );
}

// ─── Color pair (background + foreground on one row) ─────────────────────────

function ColorPair({
  bg,
  fg,
  label: pairLabel,
}: {
  bg: string;
  fg: string;
  label: string;
}) {
  return (
    <div style={rowStyle}>
      <div
        style={{
          height: 64,
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--border)",
          backgroundColor: `var(${bg})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "0.6875rem",
            color: `var(${fg})`,
          }}
        >
          Aa
        </span>
      </div>
      <span style={name}>{pairLabel}</span>
      <span style={label}>{`var(${bg})`}</span>
      <span style={label}>{`var(${fg})`}</span>
    </div>
  );
}

// ─── Radius chip ──────────────────────────────────────────────────────────────

function RadiusChip({ token, alias }: { token: string; alias?: string }) {
  return (
    <div style={rowStyle}>
      <div
        style={{
          height: 64,
          width: 64,
          backgroundColor: "var(--primary)",
          borderRadius: `var(${token})`,
        }}
      />
      <span style={name}>{alias ?? token}</span>
      <span style={label}>{`var(${token})`}</span>
    </div>
  );
}

// ─── Typography row ───────────────────────────────────────────────────────────

function TypographyRow({
  token,
  value,
  children,
}: {
  token: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "1.5rem",
        borderBottom: "1px solid var(--border)",
        paddingBottom: "0.75rem",
      }}
    >
      <div style={{ width: 200, flexShrink: 0 }}>
        <div style={name}>{token}</div>
        <div style={label}>{value}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

// ─── Stories ──────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Design Tokens/Overview",
  parameters: {
    layout: "padded",
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;
type Story = StoryObj;

// ── Colors ────────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      {/* Surfaces */}
      <div style={sectionStyle}>
        <Heading>Surfaces</Heading>
        <div style={gridStyle}>
          <ColorPair
            bg="--background"
            fg="--foreground"
            label="Background / Foreground"
          />
          <ColorPair
            bg="--card"
            fg="--card-foreground"
            label="Card / Card Foreground"
          />
          <ColorPair
            bg="--popover"
            fg="--popover-foreground"
            label="Popover / Popover Foreground"
          />
        </div>
      </div>

      {/* Brand */}
      <div style={sectionStyle}>
        <Heading>Brand</Heading>
        <div style={gridStyle}>
          <ColorPair
            bg="--primary"
            fg="--primary-foreground"
            label="Primary / Primary Foreground"
          />
          <ColorPair
            bg="--secondary"
            fg="--secondary-foreground"
            label="Secondary / Secondary Foreground"
          />
        </div>
      </div>

      {/* Utility */}
      <div style={sectionStyle}>
        <Heading>Utility</Heading>
        <div style={gridStyle}>
          <ColorPair
            bg="--muted"
            fg="--muted-foreground"
            label="Muted / Muted Foreground"
          />
          <ColorPair
            bg="--accent"
            fg="--accent-foreground"
            label="Accent / Accent Foreground"
          />
          <ColorPair
            bg="--destructive"
            fg="--destructive-foreground"
            label="Destructive / Destructive Foreground"
          />
        </div>
      </div>

      {/* Form */}
      <div style={sectionStyle}>
        <Heading>Form</Heading>
        <div style={gridStyle}>
          <ColorChip token="--border" displayLabel="Border" />
          <ColorChip
            token="--input-background"
            displayLabel="Input Background"
          />
          <ColorChip
            token="--switch-background"
            displayLabel="Switch Background"
          />
          <ColorChip token="--ring" displayLabel="Ring (Focus)" />
        </div>
      </div>
    </div>
  ),
};

// ── Border Radius ─────────────────────────────────────────────────────────────

export const BorderRadius: Story = {
  render: () => (
    <div style={sectionStyle}>
      <Heading>Border Radius Scale</Heading>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "flex-end",
        }}
      >
        <RadiusChip token="--radius-sm" alias="sm (--radius - 4px)" />
        <RadiusChip token="--radius-md" alias="md (--radius - 2px)" />
        <RadiusChip token="--radius-lg" alias="lg (= --radius)" />
        <RadiusChip token="--radius-xl" alias="xl (--radius + 4px)" />
        <div style={rowStyle}>
          <div
            style={{
              height: 64,
              width: 64,
              backgroundColor: "var(--primary)",
              borderRadius: "9999px",
            }}
          />
          <span style={name}>full</span>
          <span style={label}>9999px</span>
        </div>
      </div>
    </div>
  ),
};

// ── Typography ────────────────────────────────────────────────────────────────

export const Typography: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      {/* Font sizes */}
      <div style={sectionStyle}>
        <Heading>Font Size</Heading>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <TypographyRow token="--font-size-base" value="16px">
            <span style={{ fontSize: "var(--font-size-base)" }}>
              The quick brown fox jumps over the lazy dog
            </span>
          </TypographyRow>
        </div>
      </div>

      {/* Font weights */}
      <div style={sectionStyle}>
        <Heading>Font Weight</Heading>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <TypographyRow token="--font-weight-normal" value="400">
            <span
              style={{
                fontWeight:
                  "var(--font-weight-normal)" as React.CSSProperties["fontWeight"],
              }}
            >
              Normal — The quick brown fox jumps over the lazy dog
            </span>
          </TypographyRow>
          <TypographyRow token="--font-weight-medium" value="500">
            <span
              style={{
                fontWeight:
                  "var(--font-weight-medium)" as React.CSSProperties["fontWeight"],
              }}
            >
              Medium — The quick brown fox jumps over the lazy dog
            </span>
          </TypographyRow>
        </div>
      </div>

      {/* Semantic text scale (Figma heading/body scale) */}
      <div style={sectionStyle}>
        <Heading>Semantic Scale (heading elements)</Heading>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          {(
            [
              { el: "h1", size: "2xl" },
              { el: "h2", size: "xl" },
              { el: "h3", size: "lg" },
              { el: "h4", size: "base" },
            ] as const
          ).map(({ el, size }) =>
            React.createElement(
              el,
              {
                key: el,
                style: {
                  margin: 0,
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "0.5rem",
                },
              },
              `${el.toUpperCase()} — heading ${size}`,
            ),
          )}
          <p style={{ margin: 0 }}>p — Body text at base font size</p>
        </div>
      </div>
    </div>
  ),
};

// ── All tokens reference ───────────────────────────────────────────────────────

const TOKEN_TABLE: {
  category: string;
  tokens: { token: string; description: string }[];
}[] = [
  {
    category: "Surfaces",
    tokens: [
      { token: "--background", description: "Page / app background" },
      { token: "--foreground", description: "Default text color" },
      { token: "--card", description: "Card surface" },
      { token: "--card-foreground", description: "Text on card" },
      { token: "--popover", description: "Popover / dropdown surface" },
      { token: "--popover-foreground", description: "Text in popover" },
    ],
  },
  {
    category: "Brand",
    tokens: [
      { token: "--primary", description: "Primary action color" },
      { token: "--primary-foreground", description: "Text on primary" },
      { token: "--secondary", description: "Secondary action color" },
      { token: "--secondary-foreground", description: "Text on secondary" },
    ],
  },
  {
    category: "Utility",
    tokens: [
      { token: "--muted", description: "Subdued surface" },
      { token: "--muted-foreground", description: "Subdued text" },
      { token: "--accent", description: "Hover highlight surface" },
      { token: "--accent-foreground", description: "Text on accent" },
      { token: "--destructive", description: "Error / delete action" },
      { token: "--destructive-foreground", description: "Text on destructive" },
    ],
  },
  {
    category: "Form",
    tokens: [
      { token: "--border", description: "Default border color" },
      { token: "--input-background", description: "Input / textarea fill" },
      { token: "--switch-background", description: "Unchecked switch track" },
      { token: "--ring", description: "Focus ring color" },
    ],
  },
  {
    category: "Typography",
    tokens: [
      { token: "--font-size-base", description: "Root font size (16px)" },
      { token: "--font-weight-normal", description: "Normal weight (400)" },
      { token: "--font-weight-medium", description: "Medium weight (500)" },
    ],
  },
  {
    category: "Border Radius",
    tokens: [
      { token: "--radius", description: "Base radius (0.625rem)" },
      { token: "--radius-sm", description: "Small (base - 4px)" },
      { token: "--radius-md", description: "Medium (base - 2px)" },
      { token: "--radius-lg", description: "Large (= base)" },
      { token: "--radius-xl", description: "Extra large (base + 4px)" },
    ],
  },
];

export const TokenReference: Story = {
  name: "All Tokens Reference",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {TOKEN_TABLE.map(({ category, tokens }) => (
        <div key={category} style={sectionStyle}>
          <Heading>{category}</Heading>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.8125rem",
            }}
          >
            <thead>
              <tr>
                {["Token", "Swatch", "Description"].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "0.375rem 0.75rem",
                      borderBottom: "1px solid var(--border)",
                      fontWeight: 600,
                      color: "var(--muted-foreground)",
                      fontFamily: "inherit",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tokens.map(({ token, description }) => (
                <tr
                  key={token}
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <td
                    style={{
                      padding: "0.5rem 0.75rem",
                      fontFamily: "monospace",
                    }}
                  >
                    {token}
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>
                    {/* Only color tokens get a swatch */}
                    {!token.startsWith("--font") &&
                    !token.startsWith("--radius") ? (
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border)",
                          backgroundColor: `var(${token})`,
                        }}
                      />
                    ) : (
                      <span style={{ color: "var(--muted-foreground)" }}>
                        —
                      </span>
                    )}
                  </td>
                  <td
                    style={{
                      padding: "0.5rem 0.75rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  ),
};
