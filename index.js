const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildInvites,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildPresences
    ]
});

const config = {
    token: 'MTAwMTAwODgxODY4OTQyNTQwOQ.Gj6-G1.8NQuoAGg_9iD-kdJEezrTHITs4Zd_-oDANLLrs',
    prefix: '!'
};

// تحديث قائمة الألوان لتصبح 50 لون
const colorsList = [
    { hex: '#FF0000', name: 'أحمر', emoji: '🔴' },
    { hex: '#00FF00', name: 'أخضر', emoji: '🟢' },
    { hex: '#0000FF', name: 'أزرق', emoji: '🔵' },
    { hex: '#FFFF00', name: 'أصفر', emoji: '🟡' },
    { hex: '#FFA500', name: 'برتقالي', emoji: '🟠' },
    { hex: '#800080', name: 'بنفسجي', emoji: '🟣' },
    { hex: '#FFC0CB', name: 'وردي فاتح', emoji: '🎀' },
    { hex: '#FF69B4', name: 'وردي', emoji: '💗' },
    { hex: '#008000', name: 'أخضر غامق', emoji: '🌲' },
    { hex: '#808000', name: 'زيتوني', emoji: '🟫' },
    { hex: '#800000', name: 'خمري', emoji: '🔺' },
    { hex: '#008080', name: 'تركواز', emoji: '🌊' },
    { hex: '#000080', name: 'كحلي', emoji: '🌃' },
    { hex: '#FF4500', name: 'برتقالي غامق', emoji: '🟧' },
    { hex: '#FF6347', name: 'طماطم', emoji: '🍅' },
    { hex: '#FFB6C1', name: 'وردي فاتح', emoji: '🌸' },
    { hex: '#FF1493', name: 'فوشيا', emoji: '💖' },
    { hex: '#FF00FF', name: 'ماجنتا', emoji: '💜' },
    { hex: '#FF8C00', name: 'برتقالي ذهبي', emoji: '🔸' },
    { hex: '#FFD700', name: 'ذهبي', emoji: '⭐' },
    { hex: '#7FFF00', name: 'أخضر ليموني', emoji: '🌿' },
    { hex: '#32CD32', name: 'أخضر فاتح', emoji: '🍀' },
    { hex: '#00FF7F', name: 'أخضر ربيعي', emoji: '🌱' },
    { hex: '#1E90FF', name: 'أزرق سماوي', emoji: '🌐' },
    { hex: '#8A2BE2', name: 'أزرق بنفسجي', emoji: '🔮' },
    { hex: '#9400D3', name: 'بنفسجي غامق', emoji: '⚜️' },
    { hex: '#9932CC', name: 'أرجواني', emoji: '🪀' },
    { hex: '#8B008B', name: 'أرجواني غامق', emoji: '💈' },
    { hex: '#DB7093', name: 'وردي متوسط', emoji: '🎭' },
    { hex: '#F08080', name: 'أحمر فاتح', emoji: '🧿' },
    { hex: '#CD5C5C', name: 'أحمر هندي', emoji: '🔱' },
    { hex: '#DC143C', name: 'أحمر قرمزي', emoji: '❣️' },
    { hex: '#B22222', name: 'طوبي', emoji: '♦️' },
    { hex: '#8B0000', name: 'أحمر غامق', emoji: '🎴' },
    { hex: '#9ACD32', name: 'أخضر أصفر', emoji: '🌳' },
    { hex: '#00FFFF', name: 'سيان', emoji: '💠' },
    { hex: '#4B0082', name: 'نيلي', emoji: '🔷' },
    { hex: '#483D8B', name: 'أزرق داكن', emoji: '🌌' },
    { hex: '#663399', name: 'بنفسجي ملكي', emoji: '👾' },
    { hex: '#8B4513', name: 'بني', emoji: '🟤' },
    { hex: '#556B2F', name: 'زيتوني غامق', emoji: '🎋' },
    { hex: '#228B22', name: 'أخضر غابة', emoji: '🌳' },
    { hex: '#20B2AA', name: 'فيروزي', emoji: '🗾' },
    { hex: '#87CEEB', name: 'أزرق سماوي فاتح', emoji: '☁️' },
    { hex: '#4682B4', name: 'أزرق فولاذي', emoji: '🌊' },
    { hex: '#D2691E', name: 'شوكولاتة', emoji: '🍫' },
    { hex: '#BC8F8F', name: 'وردي ترابي', emoji: '🏺' },
    { hex: '#DAA520', name: 'ذهبي غامق', emoji: '🏆' },
    { hex: '#BDB76B', name: 'كاكي', emoji: '🎭' },
    { hex: '#DEB887', name: 'خشبي', emoji: '🪵' }
];

// تحديد صلاحيات الرتب
const ownerPermissions = [
    'Administrator' // يتضمن جميع الصلاحيات
];

const adminPermissions = [
    'ManageGuild',          // إدارة السيرفر
    'ManageRoles',          // إدارة الرتب
    'ManageChannels',       // إدارة القنوات
    'ManageMessages',       // إدارة الرسائل
    'ManageWebhooks',       // إدارة الويب هوك
    'ManageNicknames',      // إدارة الأسماء المستعارة
    'ManageEmojisAndStickers', // إدارة الإيموجي
    'KickMembers',          // طرد الأعضاء
    'BanMembers',           // حظر الأعضاء
    'ModerateMembers',      // إدارة الأعضاء
    'ViewAuditLog',         // عرض سجل التغييرات
    'MuteMembers',          // كتم الأعضاء
    'DeafenMembers',        // كتم صوت الأعضاء
    'MoveMembers'           // نقل الأعضاء
];

client.on('ready', () => {
    console.log(`${client.user.tag} تم تشغيل البوت`);
});

client.on('messageCreate', async message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'مسح':
            if (!message.member.permissions.has('ManageMessages')) {
                return message.reply('❌ ليس لديك صلاحية حذف الرسائل!');
            }

            const amount = parseInt(args[0]) || 100;
            if (amount < 1 || amount > 100) {
                return message.reply('❌ يجب أن يكون العدد بين 1 و 100');
            }

            await message.channel.bulkDelete(amount, true);
            message.channel.send(`✅ تم حذف ${amount} رسالة`).then(msg => {
                setTimeout(() => msg.delete(), 3000);
            });
            break;

        case 'قفل':
            if (!message.member.permissions.has('ManageChannels')) {
                return message.reply('❌ ليس لديك صلاحية قفل الرومات!');
            }

            await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                SendMessages: false
            });
            message.reply('🔒 تم قفل الروم');
            break;

        case 'فتح':
            if (!message.member.permissions.has('ManageChannels')) {
                return message.reply('❌ ليس لديك صلاحية فتح الرومات!');
            }

            await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                SendMessages: true
            });
            message.reply('🔓 تم فتح الروم');
            break;

        case 'حظر':
            if (!message.member.permissions.has('BanMembers')) {
                return message.reply('❌ ليس لديك صلاحية حظر الأعضاء!');
            }

            const userToBan = message.mentions.users.first();
            if (!userToBan) return message.reply('❌ يجب عليك منشن العضو المراد حظره!');

            const banReason = args.slice(1).join(' ') || 'لا يوجد سبب';
            await message.guild.members.ban(userToBan, { reason: banReason });
            message.reply(`✅ تم حظر ${userToBan.tag} | السبب: ${banReason}`);
            break;

        case 'طرد':
            if (!message.member.permissions.has('KickMembers')) {
                return message.reply('❌ ليس لديك صلاحية طرد الأعضاء!');
            }

            const userToKick = message.mentions.users.first();
            if (!userToKick) return message.reply('❌ يجب عليك منشن العضو المراد طرده!');

            const kickReason = args.slice(1).join(' ') || 'لا يوجد سبب';
            await message.guild.members.kick(userToKick, kickReason);
            message.reply(`✅ تم طرد ${userToKick.tag} | السبب: ${kickReason}`);
            break;

        case 'سحب':
        case 'اسحب':
            if (!message.member.permissions.has('MoveMembers')) {
                return message.reply('❌ ليس لديك صلاحية سحب الأعضاء!');
            }

            const memberToMove = message.mentions.members.first();
            if (!memberToMove) return message.reply('❌ يجب عليك منشن العضو المراد سحبه!');
            
            if (!message.member.voice.channel) {
                return message.reply('❌ يجب أن تكون في روم صوتي!');
            }

            await memberToMove.voice.setChannel(message.member.voice.channel);
            message.reply(`✅ تم سحب ${memberToMove.user.username} إلى ${message.member.voice.channel.name}`);
            break;

        case 'اسكت':
        case 'ميوت':
            if (!message.member.permissions.has('MuteMembers')) {
                return message.reply('❌ ليس لديك صلاحية إسكات الأعضاء!');
            }

            const memberToMute = message.mentions.members.first();
            if (!memberToMute) return message.reply('❌ يجب عليك منشن العضو المراد إسكاته!');

            const time = parseInt(args[1]) || 5;
            await memberToMute.timeout(time * 60 * 1000, args.slice(2).join(' ') || 'لا يوجد سبب');
            message.reply(`✅ تم إسكات ${memberToMute.user.username} لمدة ${time} دقائق`);
            break;

        case 'تكلم':
            if (!message.member.permissions.has('MuteMembers')) {
                return message.reply('❌ ليس لديك صلاحية إلغاء إسكات الأعضاء!');
            }

            const memberToUnmute = message.mentions.members.first();
            if (!memberToUnmute) return message.reply('❌ يجب عليك منشن العضو!');

            await memberToUnmute.timeout(null);
            message.reply(`✅ تم إلغاء إسكات ${memberToUnmute.user.username}`);
            break;

        case 'نداء':
        case 'منشن':
            if (!message.member.permissions.has('MentionEveryone')) {
                return message.reply('❌ ليس لديك صلاحية منشن الكل!');
            }

            const announcement = args.join(' ');
            if (!announcement) return message.reply('❌ يجب كتابة رسالة للإعلان!');

            message.delete();
            message.channel.send({
                content: '@everyone',
                embeds: [{
                    color: 0xff0000,
                    title: '📢 إعلان هام',
                    description: announcement,
                    footer: { text: `بواسطة: ${message.author.tag}` }
                }]
            });
            break;

        case 'مساعدة':
        case 'اوامر':
            const helpEmbed = {
                color: 0x0099ff,
                title: '📚 قائمة الأوامر',
                fields: [
                    { name: '!سيت_اب', value: 'إعداد السيرفر كاملاً' },
                    { name: '!لون [رقم]', value: 'تغيير لون اسمك' },
                    { name: '!مسح [عدد]', value: 'حذف رسائل من الروم' },
                    { name: '!قفل', value: 'قفل الروم' },
                    { name: '!فتح', value: 'فتح الروم' },
                    { name: '!حظر [@عضو] [سبب]', value: 'حظر عضو' },
                    { name: '!طرد [@عضو] [سبب]', value: 'طرد عضو' },
                    { name: '!سحب [@عضو]', value: 'سحب عضو للروم الصوتي' },
                    { name: '!اسكت [@عضو] [دقائق] [سبب]', value: 'إسكات عضو' },
                    { name: '!تكلم [@عضو]', value: 'إلغاء إسكات عضو' },
                    { name: '!نداء [الرسالة]', value: 'إرسال إعلان مع منشن' }
                ],
                footer: { text: 'للمزيد من المساعدة تواصل مع الإدارة' }
            };
            message.reply({ embeds: [helpEmbed] });
            break;

        case 'سيت_اب':
            try {
                // التحقق من صلاحيات البوت
                if (!message.guild.members.me.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
                    return message.reply('❌ البوت يحتاج إلى صلاحية ADMINISTRATOR للقيام بهذه العملية');
                }

                // التحقق من صلاحيات المستخدم
                if (!message.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
                    return message.reply('❌ أنت تحتاج إلى صلاحية ADMINISTRATOR لاستخدام هذا الأمر');
                }

                // إنشاء قناة مؤقتة للرسائل
                const tempChannel = await message.guild.channels.create({
                    name: 'setup-temp',
                    type: Discord.ChannelType.GuildText
                });

                const statusMsg = await tempChannel.send('جاري إعداد السيرفر... الرجاء الانتظار');

                try {
                    // حذف جميع القنوات (ما عدا القناة المؤقتة)
                    await statusMsg.edit('جاري حذف جميع القنوات...');
                    await Promise.all(message.guild.channels.cache
                        .filter(channel => channel.id !== tempChannel.id)
                        .map(channel => channel.delete())
                    );

                    // حذف جميع الرتب (ما عدا @everyone)
                    await statusMsg.edit('جاري حذف جميع الرتب...');
                    await Promise.all(message.guild.roles.cache
                        .filter(role => role.name !== '@everyone' && role.position < message.guild.members.me.roles.highest.position)
                        .map(role => role.delete())
                    );

                    await statusMsg.edit('تم حذف جميع القنوات والرتب... جاري إنشاء الرتب الجديدة');

                    // إنشاء رتب الألوان أولاً (لتكون في الأعلى)
                    await statusMsg.edit('جاري إنشاء رتب الألوان...');
                    for (let i = 0; i < colorsList.length; i++) {
                        try {
                            await message.guild.roles.create({
                                name: `・🎨・${i + 1}`,
                                color: colorsList[i].hex,
                                permissions: [], // بدون صلاحيات
                                mentionable: false,
                                hoist: false // لا تظهر منفصلة في قائمة الأعضاء
                            });
                        } catch (err) {
                            console.error(`خطأ في إنشاء رتبة اللون ${i + 1}:`, err);
                        }
                    }

                    // إنشاء الرتب الأساسية
                    const roles = [
                        { 
                            name: '👑 | المالك',
                            color: '#ff0000',
                            permissions: ownerPermissions,
                            hoist: true,
                            mentionable: true
                        },
                        { 
                            name: '⚡ | ادمن',
                            color: '#ff4500',
                            permissions: adminPermissions,
                            hoist: true,
                            mentionable: true
                        },
                        { 
                            name: '🛡️ | مشرف',
                            color: '#00ff00',
                            permissions: ['ManageMessages', 'KickMembers'],
                            hoist: true
                        },
                        { 
                            name: '🎮 | مشرف العاب',
                            color: '#ff69b4',
                            permissions: ['ManageMessages'],
                            hoist: true
                        },
                        { 
                            name: '🎵 | دي جي',
                            color: '#9400d3',
                            permissions: ['Connect', 'Speak'],
                            hoist: true
                        },
                        { 
                            name: '👥 | عضو مميز',
                            color: '#1e90ff',
                            permissions: [],
                            hoist: true
                        },
                        { 
                            name: '🎯 | عضو نشط',
                            color: '#32cd32',
                            permissions: [],
                            hoist: true
                        },
                        { 
                            name: '👤 | عضو',
                            color: '#808080',
                            permissions: [],
                            hoist: true
                        }
                    ];

                    // إنشاء الرتب من الأسفل إلى الأعلى
                    for (const role of roles) {
                        try {
                            await message.guild.roles.create({
                                name: role.name,
                                color: role.color,
                                permissions: role.permissions || [],
                                hoist: role.hoist || false,
                                mentionable: role.mentionable || false
                            });
                        } catch (err) {
                            console.error(`خطأ في إنشاء رتبة ${role.name}:`, err);
                        }
                    }

                    await statusMsg.edit('تم إنشاء الرتب... جاري إنشاء القنوات');

                    // إنشاء الفئات والقنوات
                    const categories = [
                        {
                            name: '📑 | معلومات السيرفر',
                            channels: [
                                { name: '『👋』الترحيب', type: 'GuildText' },
                                { name: '『📢』الإعلانات', type: 'GuildText' },
                                { name: '『📜』القوانين', type: 'GuildText' },
                                { name: '『🎨』اختيار-الالوان', type: 'GuildText' }
                            ]
                        },
                        {
                            name: '💬 | الرومات العامة',
                            channels: [
                                { name: '『💭』شات-عام', type: 'GuildText' },
                                { name: '『🎮』شات-العاب', type: 'GuildText' },
                                { name: '『📷』صور', type: 'GuildText' },
                                { name: '『🤖』اوامر-البوتات', type: 'GuildText' }
                            ]
                        },
                        {
                            name: '🎮 | الالعاب',
                            channels: [
                                { name: '『🎲』العاب', type: 'GuildText' },
                                { name: '『🎯』تحديات', type: 'GuildText' },
                                { name: '『🏆』مسابقات', type: 'GuildText' }
                            ]
                        },
                        {
                            name: '🔊 | الرومات الصوتية',
                            channels: [
                                { name: '『💬』شات عام', type: 'GuildVoice', userLimit: 15 },
                                { name: '『🎮』العاب', type: 'GuildVoice', userLimit: 10 },
                                { name: '『🎵』موسيقى ¹', type: 'GuildVoice', userLimit: 10 },
                                { name: '『🎵』موسيقى ²', type: 'GuildVoice', userLimit: 10 },
                                { name: '『🎤』مايك تشيك', type: 'GuildVoice', userLimit: 2 }
                            ]
                        },
                        {
                            name: '👮 | الإدارة',
                            channels: [
                                { name: '『📢』اعلانات-الادارة', type: 'GuildText' },
                                { name: '『💬』شات-الادارة', type: 'GuildText' },
                                { name: '『📋』السجلات', type: 'GuildText' },
                                { name: '『🔊』روم الإدارة', type: 'GuildVoice', userLimit: 10 }
                            ]
                        }
                    ];

                    for (const category of categories) {
                        const createdCategory = await message.guild.channels.create({
                            name: category.name,
                            type: Discord.ChannelType.GuildCategory
                        });

                        for (const channel of category.channels) {
                            await message.guild.channels.create({
                                name: channel.name,
                                type: Discord.ChannelType[channel.type],
                                parent: createdCategory.id,
                                userLimit: channel.userLimit
                            });
                        }
                    }

                    // حذف القناة المؤقتة في النهاية
                    await statusMsg.edit('✅ تم إعداد السيرفر بنجاح مع إضافة 50 لون!');
                    await new Promise(resolve => setTimeout(resolve, 3000)); // انتظار 3 ثواني
                    await tempChannel.delete();

                } catch (innerError) {
                    console.error(innerError);
                    await statusMsg.edit('❌ حدث خطأ أثناء التنفيذ. تأكد من ترتيب رتبة البوت وصلاحياته');
                    await new Promise(resolve => setTimeout(resolve, 5000));
                    await tempChannel.delete().catch(() => {});
                    return;
                }

            } catch (error) {
                console.error(error);
                message.author.send('❌ حدث خطأ أثناء إعداد السيرفر. تأكد من أن البوت لديه الصلاحيات الكافية').catch(() => {});
            }
            break;

        case 'لون':
            if (!args[0]) {
                const colorRoles = message.guild.roles.cache
                    .filter(role => role.name.includes('・🎨・'))
                    .sort((a, b) => {
                        const numA = parseInt(a.name.split('・')[2]);
                        const numB = parseInt(b.name.split('・')[2]);
                        return numA - numB;
                    });

                const embed = {
                    color: 0x0099ff,
                    title: '🎨 نظام الألوان',
                    description: '**قائمة الألوان المتاحة:**',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/1316184250491469825/1316204213767901235/Screenshot_224.png?ex=675a3232&is=6758e0b2&hm=4e3ea57db6e81116e38047d342ce3c5e4dd2145b6b039fc4134b08f5e52ee6bd&'
                    },
                    fields: [
                        {
                            name: '📝 طريقة الاختيار',
                            value: '```!لون رقم_اللون```\nمثال: `!لون 1` لاختيار اللون الأحمر'
                        },
                        {
                            name: '💡 معلومات',
                            value: '• الأرقام مرتبة من 1 إلى 50\n• يمكنك تغيير لونك في أي وقت'
                        }
                    ],
                    footer: {
                        text: `${colorRoles.size} لون متاح | !لون [رقم_اللون]`
                    }
                };

                return message.channel.send({ embeds: [embed] });
            }

            const colorNumber = parseInt(args[0]);
            if (isNaN(colorNumber) || colorNumber < 1 || colorNumber > colorsList.length) {
                message.delete().catch(() => {});
                return message.channel.send('❌ رقم لون غير صحيح!').then(msg => {
                    setTimeout(() => msg.delete().catch(() => {}), 3000);
                });
            }

            const colorRole = message.guild.roles.cache.find(role => role.name === `・🎨・${colorNumber}`);
            if (!colorRole) {
                message.delete().catch(() => {});
                return message.channel.send('❌ لم يتم العثور على اللون!').then(msg => {
                    setTimeout(() => msg.delete().catch(() => {}), 3000);
                });
            }

            // إزالة جميع رتب الألوان السابقة
            await Promise.all(
                message.member.roles.cache
                    .filter(role => role.name.includes('・🎨・'))
                    .map(role => message.member.roles.remove(role))
            );

            await message.member.roles.add(colorRole);
            message.delete().catch(() => {});
            message.channel.send(`✅ تم تغيير لونك إلى ${colorRole.name}`).then(msg => {
                setTimeout(() => msg.delete().catch(() => {}), 3000);
            });
            break;
    }
});

client.login(config.token); 
