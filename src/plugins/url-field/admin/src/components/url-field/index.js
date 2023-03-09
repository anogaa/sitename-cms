import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Stack } from "@strapi/design-system/Stack";
import { Textarea } from "@strapi/design-system";

export default function Index({
  name,
  error,
  description,
  onChange,
  value,
  intlLabel,
  attribute,
}) {
  const { formatMessage } = useIntl();
  const [prompt, setPrompt] = useState(value ? value : "");
  const [err, setErr] = useState("");

  useEffect(() => {
    var res = prompt.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    if (res == null) {
      return (
        console.log("please enter valid url"), setErr("please enter valid url")
      );
    } else {
      return (
        onChange({
          target: { name, value: prompt, type: attribute.type },
        }),
        setErr("")
      );
    }
  }, [prompt]);
  return (
    <Stack spacing={1}>
      <Textarea
        placeholder="Please write url"
        label={intlLabel.id}
        name={intlLabel.id}
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
        error={err}
      />
    </Stack>
  );
}
