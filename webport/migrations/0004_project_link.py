# Generated by Django 4.2.7 on 2024-02-19 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webport', '0003_alter_project_image_projectimg'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='link',
            field=models.CharField(default='', max_length=500),
        ),
    ]
