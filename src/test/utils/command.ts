import { Client, CommandMessage } from '@typeit/discord';
import { Guild, MessageFlags, User } from 'discord.js';

export const command = (
  name: string,
  contentIncludes?: string
): CommandMessage | any => {
  const guild = new Guild(new Client(), {});

  return {
    _edits: [],
    activity: null,
    application: null,
    args: expect.anything(),
    argsRules: expect.anything(),
    attachments: expect.anything(),
    awaitReactions: jest.fn().mockResolvedValue({}),
    author: expect.anything(),
    channel: expect.anything(),
    cleanContent: '',
    client: new Client(),
    commandContent: '',
    commandName: name,
    content: `<!@> ${name} ${contentIncludes}`,
    createdAt: new Date('2021-03-07T15:27:22.822Z'),
    createdTimestamp: 1615130842,
    createReactionCollector: jest.fn(),
    crosspost: jest.fn().mockResolvedValue({}),
    deletable: false,
    delete: jest.fn().mockResolvedValue({}),
    deleted: false,
    description: '',
    discord: {
      description: '',
      infos: {},
      argsRules: expect.anything(),
      prefix: '<',
    },
    edit: jest.fn().mockResolvedValue({}),
    editable: false,
    editedAt: new Date('2021-03-07T15:27:22.822Z'),
    editedTimestamp: 1615130842,
    edits: [],
    embeds: [],
    equals: jest.fn(),
    fetch: jest.fn().mockResolvedValue({}),
    fetchWebhook: jest.fn().mockResolvedValue({}),
    flags: new MessageFlags(),
    guild: guild,
    id: '818146469046517770',
    infos: {},
    member: expect.anything(),
    mentions: expect.anything(),
    nonce: '',
    partial: false,
    patch: jest.fn(),
    pin: jest.fn().mockResolvedValue({}),
    pinnable: false,
    pinned: false,
    prefix: '<',
    react: jest.fn().mockResolvedValue({}),
    reactions: expect.anything(),
    reference: null,
    reply: jest.fn(),
    suppressEmbeds: jest.fn().mockResolvedValue({}),
    system: false,
    toJSON: jest.fn().mockResolvedValue({}),
    tts: false,
    type: expect.anything(),
    unpin: jest.fn().mockResolvedValue({}),
    url: '',
    webhookID: '',
  };
};
