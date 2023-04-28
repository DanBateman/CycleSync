import React, { useEffect, useState } from 'react';
import { Box, Chip, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteTag } from '../calendar/calendarSlice';

const Tags = (props) => {
  const [tags, setTags] = useState(props.tags ? [...props.tags] : []);
  const [newTag, setNewTag] = useState('');

  const selectTagName = (type) => {
    switch (type) {
      case type.includes('meal'):
        return 'Ingredients';
      default:
        return 'Tags';
    }
  };

  const save = () => {
    props.saveFunc({ tags: tags });
  };

  const handleTagDelete = (index) => {
    // if (tags.length == 1) return setTags([]);
    let newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleTagChange = (e) => {
    setNewTag(e.target.value);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', m: 1, width: '250px' }}>
      <TextField
        label={`Add ${props.type.includes('eal') ? 'ingredients' : 'tags'}`}
        sx={{ mb: 1 }}
        value={newTag}
        onChange={handleTagChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && newTag !== '') {
            if (tags.includes(newTag)) return;
            setTags([...tags, newTag]);
            setNewTag('');
          }
        }}
      />
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ ml: 1 }}>
          {props.type.includes('meal') ? 'Ingredients' : 'Tags'}:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', ml: 0.4 }}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              size="small"
              sx={{ mx: 0.1, mb: 0.5 }}
              color="primary"
              label={tag}
              onDelete={() => handleTagDelete(index)}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mt: 2 }}>
        <Button variant="contained" onClick={save}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Tags;
