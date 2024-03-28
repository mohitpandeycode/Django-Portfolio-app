# Generated by Django 5.0.3 on 2024-03-28 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webport', '0008_alter_resume_profilepic'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='link',
            new_name='githubLink',
        ),
        migrations.AddField(
            model_name='project',
            name='liveLink',
            field=models.CharField(blank=True, default='', max_length=500, null=True),
        ),
    ]