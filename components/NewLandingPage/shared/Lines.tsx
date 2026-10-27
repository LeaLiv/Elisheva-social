import React from 'react';

interface LinesProps {
  lines: readonly string[];
}

// Renders each line separated by a <br />.
const Lines: React.FC<LinesProps> = ({ lines }) => (
  <>
    {lines.map((line, i) => (
      <React.Fragment key={i}>
        {i > 0 && <br />}
        {line}
      </React.Fragment>
    ))}
  </>
);

export default Lines;
