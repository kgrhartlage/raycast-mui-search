import { List } from '@raycast/api';

import { DropdownOptions, ProductDropDownProps } from './types';

const products: { id: DropdownOptions; title: string }[] = [
  { id: 'preferences', title: 'Preference Settings' },
  { id: 'all', title: 'All' },
  { id: 'material-ui', title: 'Material UI' },
  { id: 'joy-ui', title: 'Joy UI' },
  { id: 'base', title: 'Base UI' },
  { id: 'mui-x', title: 'MUI X' },
  { id: 'system', title: 'MUI System' },
];

const ProductDropDown = ({ onChange }: ProductDropDownProps) => {
  return (
    <List.Dropdown
      tooltip="Include in search results"
      onChange={onChange}
      defaultValue="preferences"
    >
      <List.Dropdown.Section title="Include in search results">
        {products.map(({ id, title }) => (
          <List.Dropdown.Item key={id} title={title} value={id} />
        ))}
      </List.Dropdown.Section>
    </List.Dropdown>
  );
};

export default ProductDropDown;
